import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { Doc, Id } from './_generated/dataModel';

export const getById = query({
  args: { documentId: v.id('properties') },
  handler: async (ctx, args) => {
    const document = await ctx.db.get(args.documentId);

    if (!document) {
      throw new Error('Not Found');
    }

    console.log(document);

    return document;
  },
});

export const update = mutation({
  args: {
    id: v.id('properties'),
    about: v.optional(v.string()),
    owner: v.optional(v.string()),
    repair_quality: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error('Not Authenticated');

    const userId = identity.subject;

    const { id, ...rest } = args;

    const existingDocument = await ctx.db.get(args.id);

    if (!existingDocument) throw new Error('Not Found');

    const document = ctx.db.patch(args.id, { ...rest });

    return document;
  },
});

export const getAllData = query({
  args: {},
  handler: async (ctx, args) => {
    const documents = await ctx.db
      .query('properties')
      .withIndex('by_name', (q) => q)
      .collect();

    return documents;
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id('properties'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    const document = await ctx.db.patch(args.id, { status: 'sold' });

    if (!identity) {
      throw new Error('Not Authenticated');
    }

    const userId = identity?.subject;

    console.log(document);

    return document;
  },
});

export const createEntry = mutation({
  args: {
    property_name: v.string(),
    location: v.string(),
    price: v.number(),
    image_url: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Not Authenticated');
    }

    const userId = identity.subject;

    const document = await ctx.db.insert('properties', {
      ...args,
      status: 'available',
    });

    return document;
  },
});
