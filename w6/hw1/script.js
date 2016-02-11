db.companies.aggregate( [
	{ $match: { "relationships.person": { $ne: null } } },
    { $unwind: "$relationships" },
    { $project: { relationships: 1, name:1, _id: 0 } },
    { $group: {
        _id: "$relationships.person",
        companies: { $addToSet: "$name" }
    } },
    { $project: { relationships: 1, numberOfCompanies: { $size: "$companies" }}},
    { $match: {"_id.permalink": {$eq:"eric-di-benedetto"}}}
] ).pretty()