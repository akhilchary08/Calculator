class Calculate{
    Add(x,y){
        return x+y;
    }
    Multiply(x,y){
        return x*y;
    }
    Divide(x,y){
        return x/y;
    }
    Subtract(x,y){
        return x-y;
    }
}

let mathChars=new Map();
mathChars.set('+',1);
mathChars.set('-',1);
mathChars.set('/',1);
mathChars.set('*',1);

let numChars=new Map();
for(let i=0;i<=9;i++)
{
    numChars.set(String(i),1);
}

this.addEventListener('keypress',event=>{
    clicked(event.key);
})

const clicked=(char)=>{
    if(mathChars.has(char) && !check())
    {
        document.getElementById('input').value+=char;
    }
    else if(numChars.has(char))
    {
        document.getElementById('input').value+=char;
    }
    else if(char==='Enter')
    {
        calculateAns();
    }
}

const check=()=>{
    const input=document.getElementById('input').value;
    if(input==='Infinity') document.getElementById('input').value="";
    if(input===undefined) return false;
    return mathChars.has(input[input.length-1]);
}

const reset=()=>{
    document.getElementById('input').value="";
}

const calculateAns=()=>{
    const input=document.getElementById('input').value;
    if(numChars.has(input[input.length-1]))
    {
        let symbol='$',input1="",val="",input2="";
        for(let it of input)
        {
            if(numChars.has(it))
            {
                val+=it;
            }
            else if(mathChars.has(it) && symbol==='$')
            {
                symbol=it;
                input1=val;
                val="";
            }
            else if(mathChars.has(it))
            {
                input2=val;
                input1=getAns(input1,symbol,input2);
                symbol=it;
                document.getElementById('input').value=input1;
                input2="";val="";
            }
        }
        input2=val;
        let finalAns=getAns(Number(input1),symbol,Number(input2));
        document.getElementById('input').value=finalAns;
    }
}


const getAns=(input1,symbol,input2)=>{
    let calc=new Calculate();
    if(symbol==='+')
    {
        return calc.Add(Number(input1),Number(input2));
    }
    else if(symbol==='-')
    {
        return calc.Subtract(Number(input1),Number(input2));
    }
    else if(symbol==='/')
    {
        return calc.Divide(Number(input1),Number(input2));
    }
    else if(symbol==='*')
    {
        return calc.Multiply(Number(input1),Number(input2));
    }
}