db.companies.aggregate([
	{ $match: {"founded_year":2004}},
	{ $project: {
        _id: 0,
        name: 1,
        founded_year: 1,
        total_rounds: { $size: "$funding_rounds"},
        "funding_rounds.raised_amount": 1
    }},
    { $match: {"total_rounds": { $gte: 5 }}},
    { $project: {
        _id: 0,
        name: 1,
        founded_year: 1,
        total_rounds: { $size: "$funding_rounds"},
        funding_average: { $avg: "$funding_rounds.raised_amount" }
    }},
    { $sort: { funding_average: 1 } }     
]).pretty()
