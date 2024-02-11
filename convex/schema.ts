import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  properties: defineTable({
    property_name: v.optional(v.string()), // take the values from constants/data.json and desgin the schema
    location: v.optional(v.string()),
    price: v.optional(v.number()),
    beds: v.optional(v.number()),
    bathrooms: v.optional(v.number()),
    area_sqm: v.optional(v.number()),
    status: v.optional(v.string()),
    owner: v.optional(v.string()),
    image_url: v.optional(v.string()),
    property_details: v.optional(
      v.object({
        listed_on: v.string(),
        availability: v.string(),
        type: v.string(),
        laundry_availability: v.optional(v.boolean()),
        cooling: v.optional(v.string()),
        heating: v.optional(v.string()),
        city: v.string(),
        year_built: v.number(),
        lot_size_sqm: v.number(),
        parking_area: v.string(),
        deposit: v.number(),
        processing_fees: v.number(),
      })
    ),
    about: v.optional(v.string()),
    repair_quality: v.optional(v.string()),
  })
    .index('by_name', ['property_name'])
    .index('by_user_status', ['property_name', 'status']),
});
