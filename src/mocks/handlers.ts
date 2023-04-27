import { DefaultBodyType, rest } from "msw";

import {locations, Location } from "./db";

interface LocationsResult {
  total_count: number;
  locations: Location[];
}

interface LocationsPathParams {
  page: string;
  location_name: string;
  robot_id: string;
  is_starred: string;
}

export const handlers = [
  rest.get<DefaultBodyType, LocationsPathParams, LocationsResult>(
    "/locations",
    (req, res, ctx) => {
      // console.log(res)
      const search = req.url.searchParams.get("search");
      let filteredLocations: Location[] = locations;
      if (search) {
        filteredLocations = filteredLocations.filter((location) =>
          location.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      const result: LocationsResult = {
        total_count: filteredLocations.length,
        locations: filteredLocations,
      };

      return res(ctx.status(200), ctx.json(result));
    }
  ),

  rest.get("/starred_location_ids", (req, res, ctx) => {
    const location_ids = JSON.parse(
      sessionStorage.getItem("starred_location_ids") || "[]"
    );

    return res(
      ctx.status(200),
      ctx.json({
        location_ids,
      })
    );
  }),

  rest.put("/starred_location_ids", (req, res, ctx) => {
    if (!req.body) {
      return res(
        ctx.status(500),
        ctx.json({ error_msg: "Encountered unexpected error" })
      );
    }

    sessionStorage.setItem("starred_location_ids", JSON.stringify(req.body));

    return res(ctx.status(204));
  }),
];
