import "reflect-metadata";
import express from 'express';
import userRouter from './routes/router';

const app = express();
app.use(express.json());
const port = 3007;

app.use('/user',userRouter);

app.listen(port,() => {
    console.log('Server running on port 3007');
});




//get records
/*app.get("/",async function (req,res) {
    
    const userRepo = AppDataSource.getRepository(User);
    const allRecords = await userRepo.find();
    res.json(allRecords);
});

// delete record
app.delete("/:id",async function (req,res) {
    const {id} = req.params;
    const userRepo = AppDataSource.getRepository(User);
    await userRepo.delete(id);
    res.send('Record Deleted');
});

//insert record
app.post("/",async function (req,res) {
    const userRepo = AppDataSource.getRepository(User);
    let user: User = new User();
    user = {...req.body};

    const userInserted = await userRepo.save(user);
    res.json(userInserted);
});

//update record
app.put("/:id",async function (req,res) {
    const {firstName,lastName,email} =  req.body;
    const userRepo = AppDataSource.getRepository(User);
    await userRepo.update(Number(req.params.id), {firstName, lastName,email});

    res.send("Record Updated")
});

//get record
app.get("/:id",async function (req,res) {

    const userRepo = AppDataSource.getRepository(User);
    const record = await userRepo.findOne({where: {id: Number(req.params.id)}});
    res.json(record);
});*/


/*const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "typeormprodb1",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true
})

AppDataSource.initialize().then(() => {
    console.log("Database Connected Successfully");
    
}).catch((err) => console.log("Error Connecting Database", err));*/

