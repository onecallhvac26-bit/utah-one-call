import { describe, expect, it } from "vitest";

import {
  countyServiceAreas,
  majorServiceCities,
  serviceAreaCityCount,
} from "./location-data";

describe("location service-area data", () => {
  const coveredCities = countyServiceAreas.flatMap(({ cities }) => cities);

  it("contains seven counties and 41 unique communities", () => {
    expect(countyServiceAreas).toHaveLength(7);
    expect(serviceAreaCityCount).toBe(41);
    expect(new Set(coveredCities).size).toBe(41);
  });

  it("keeps every featured city in the full service-area list", () => {
    expect(majorServiceCities).toHaveLength(10);

    for (const { city } of majorServiceCities) {
      expect(coveredCities).toContain(city);
    }
  });
});
