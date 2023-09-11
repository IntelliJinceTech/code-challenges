const boardInfo = {
	users: ['64c9bab60612eb65806eef8e'],
	boardName: 'cjin10 postman test 4',
	columns: [
		{
			title: 'Backlog',
			tasks: [
				{
					taskName: 'Add your tasks here!',
					assignedUserIds: [],
					priority: 1,
					tags: [],
					taskDetail: 'Add more in-depth task information here!',
					_id: '64de7727197b715a3b158e56',
					created_at: '2023-08-17T19:38:15.022Z',
					comments: [],
				},
			],
			_id: '64de7727197b715a3b158e55',
		},
		{
			title: 'Todo',
			tasks: [],
			_id: '64de7727197b715a3b158e57',
		},
		{
			title: 'In Progress',
			tasks: [],
			_id: '64de7727197b715a3b158e58',
		},
		{
			title: 'Done',
			tasks: [],
			_id: '64de7727197b715a3b158e59',
		},
	],
	createdBy: '64c9bab60612eb65806eef8e',
	description: 'postman test 8-17',
	_id: '64de7727197b715a3b158e54',
	createdAt: '2023-08-17T19:38:15.023Z',
	__v: 0,
}

let tasks = null
const getColumns = board => {
	return board.columns
}

// columns is an array
const getTasks = columns => {
	return columns.map(column => column.tasks)
}

// console.log(boardInfo)
// console.log(getColumns(boardInfo))
console.log(getTasks(boardInfo.columns))
