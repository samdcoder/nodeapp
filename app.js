const express = require('express');
const app = express();
const dummyProfile = {
	'name': 'Mark Ross',
	'age': 25, 
	'occupation': 'Programmer',
	'country': 'India',
	'organization': 'Microsoft'
}

//returning dummy profile
app.get('/profile', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.json(dummyProfile);
})
app.listen(8050, () => {
	console.log('app listening on port 8050');
})