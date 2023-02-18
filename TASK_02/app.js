var sum=30;
var score=0;
function TimeRemaining()
{
    const time=document.getElementById("timer");
    sum=sum-1;
    if(sum>0)
    {
        if(sum<10)
        {
            time.innerText="0"+sum;
            setTimeout(TimeRemaining,1000);
        }
        else{
    setTimeout(TimeRemaining,1000);
    time.innerText=sum;
        }
    }
    else
    {
        sum=30;
        setTimeout(TimeRemaining,1000);
        time.innerText=sum;
    }
    
    
    
}
async function getQuestions()
{
   
    const config={headers: {
        'X-Api-Key': 'lchmfpjymVRLxdbsVGxKaxDtxlPoGy1xb8jd264N'},
        
    };
    const res= await axios.get("https://quizapi.io/api/v1/questions",config);
    const data=res.data;
   return data;

    
    
}
var j=0;

var data;
var i=0;
async function getQuestion()
{if(j==0)
    {
 data=await getQuestions();
 j+=1;
    }
 const q1=data[i].question;

 const o1=data[i].answers.answer_a;
 const o2=data[i].answers.answer_b;
 const o3=data[i].answers.answer_c;
 const o4=data[i].answers.answer_d;
document.getElementById("ques").innerText=q1;
document.getElementById("q1").innerText=o1;
document.getElementById("q2").innerText=o2;
document.getElementById("q3").innerText=o3;
document.getElementById("q4").innerText=o4;
const points=document.getElementById("point");
const c1=data[i].correct_answers.answer_a_correct;
const c2=data[i].correct_answers.answer_b_correct;
const c3=data[i].correct_answers.answer_c_correct;
const c4=data[i].correct_answers.answer_d_correct;
i+=1;
console.log(c1,c2,c3,c4,typeof(c1))
document.getElementById("q1").addEventListener("click",async ()=>{
    
    var s1=String(c1)

    if(  s1.includes('r'))
    {
        score+=1;
        points.innerText=score;
        sum=30;
        await getQuestion();
    }
    else{
        sum=30;
        await getQuestion();
    }

});
document.getElementById("q2").addEventListener("click",async ()=>{
    var s2=String(c2)
    if(s2.includes('r'))
    {
        score+=1;
        points.innerText=score;
        sum=30;
        await getQuestion();
    }
    else
    {
        sum=30;
        await getQuestion();
    }
    

});
document.getElementById("q3").addEventListener("click",async ()=>{
    var s3=String(c3)
    if(s3.includes('r'))
    {
        score+=1;
        points.innerText=score;
        sum=30;
        await getQuestion();
    }
    else{
        sum=30;
        await getQuestion();
    }

});
document.getElementById("q4").addEventListener("click",async ()=>{
    var s4=String(c4)
  
    if(s4.includes('r'))
    {
        score+=1;
        points.innerText=score;
        sum=30;
        await getQuestion();
    }
    else{
        sum=30;
        await getQuestion();
    }

});
}
getQuestion();
TimeRemaining();
