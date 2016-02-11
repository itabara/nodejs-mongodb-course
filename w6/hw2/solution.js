db.grades.aggregate([
	{ $unwind: "$scores"},
	{ $match: {"scores.type": {$ne:"quiz"}}},
	{ $sort:{class_id:1, student_id:1}},
	{ $group: {
        _id: { class_id: "$class_id", student_id: "$student_id" },
        average_score_student: { $avg: "$scores.score" }
    } },
    { $group: {
        _id: { class_id: "$_id.class_id"},
        average_score_class: { $avg: "$average_score_student" }
    } },
    { $sort:{average_score_class: -1}}    
]);