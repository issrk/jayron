//SQL

const connection=require('../config/db');

//Get all users

exports.getAllUsers=(req,res)=>{

    connection.query('SELECT * FROM userdata',(err,rows,fields)=>{

        if(err) throw err;

            res.json(rows);

    });

};  

 

exports.getUserById=(req,res)=>{

    const id=req.params.id;  

    connection.query('SELECT * FROM userdata WHERE id=?',[id],(err,rows,fields)=>{

        if(err) throw err;

        res.json(rows);

    });

    };  

 

exports.createUser=(req,res)=>{

    const {fname,lname,email,gender,ip_address}=req.body;  

    connection.query('INSERT INTO userdata (first_name,last_name,email,gender,ip_address) VALUES (?,?,?,?,?)',[fname,lname,email,gender,ip_address],(err,result)=>{

        if(err) throw err;

        res.json({message:'User created successfully',id:result.insertId});

    });

}

exports.updateUser=(req,res)=>{

    const {id,fname,lname,email,gender,ip_address}=req.body;  

    connection.query('UPDATE userdata SET first_name=?, last_name=?, email=?, gender=?, ip_address=? WHERE id=?',[fname,lname,email,gender,ip_address,id],(err,result)=>{

        if(err) throw err;

        res.json({message:'User updated successfully'});

    });

}

exports.deleteUser=(req,res)=>{

    const {id}=req.body;  

    connection.query('DELETE FROM userdata WHERE id=?',[id],(err,result)=>{

        if(err) throw err;

        res.json({message:'User deleted successfully'});

    });

}

 

exports.deleteUser=(req,res)=>{

    const id=req.body.id;

    connection.query('DELETE FROM userdata WHERE id=?',[id],(err,result)=>{

        if(err) throw err;

        if(result.affectedRows>0)

            res.json({message:'User deleted successfully'});

        else

            res.status(404).json({message:'User not found'});

    });

}

