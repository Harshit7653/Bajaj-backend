const express=require('express')
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Bajaj bhai select krlena')
})
app.get('/bfhl',(req,res)=>{
  res.status(200).json({operation_code:1})
})
app.post('/bfhl',(req,res)=>{
  const {data}=req.body
  let numbers=[]
  for(let i=0;i<data.length;i++){
    if(!isNaN(data[i])){
      numbers.push(data[i])
    }
  }
  let alphabets=data.filter(alp=>!numbers.includes(alp))
  let highest_alphabet=alphabets.sort()
  res.json({is_success:true,user_id:"HARSHIT SHUKLA",email:"hl8007@srmist.edu.in",roll_number:"RA2011030020079",numbers,alphabets,highest_alphabet:[highest_alphabet[highest_alphabet.length-1]]})
})
app.listen(6000,()=>{
  console.log('Listening to server....')
})