'use strict';

const express= require('express');
const app = express();

app.get('/', (req,res)=>{
	res.send("Hello World!!! This is Tran.");
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));