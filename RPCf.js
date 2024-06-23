let score={
    win:0,
    lost:0,
    tie:0
}

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'||event.key==='R')
    {
        game('ROCK');
    }
    else if(event.key==='p'||event.key==='P')
    {
        game('PAPPER');
    }
    else if(event.key==='s'||event.key==='S')
    {
        game('SCISSOR');
    }

})

function reset(){
    score={
        win:0,
        lost:0,
        tie:0
    }
}
function syschoice(choice)
{
    document.querySelector('.system').innerText=`System Chose :: ${choice}`;
}
function stats(choice)
{
    document.querySelector('.status').innerHTML=`${choice}`;
}
function game(choice)
{
    const sys_choice=systemchoice();
    syschoice(sys_choice);
    if(choice=='ROCK')
    {
        if(sys_choice==='ROCK')
        {
            score.tie++;
            stats('IT\'S A TIE');
        }
        else if(sys_choice==='SCISSOR')
        {
            score.win++;
            stats('YOU WONN!!');
        }
        else
        {
            score.lost++;
            stats('YOU LOST');
        }
    }
    else if(choice=='PAPPER')
    {
        if(sys_choice==='ROCK')
        {
            score.won++;
            stats('YOU WONN!!');
        }
        else if(sys_choice==='SCISSOR')
        {
            score.lost++;
            stats('YOU LOST');
        }
        else
        {
            score.tie++;
            stats('IT\'S A TIE');
        }
    }
    else
    {
        if(sys_choice==='ROCK')
        {
            score.win++;
            stats('YOU WONN!!');
        }
        else if(sys_choice==='SCISSOR')
        {
            score.tie++;
            stats('IT\'S A TIE');
        }
        else
        {
            score.lost++;
            stats('YOU LOST');
        }
    }
    function systemchoice()
    {
        const choice=Math.random();
        if(choice<1/3)
        {
            return 'ROCK';
        }
        else if(choice>=1/3 && choice<=2/3)
        {
            return 'PAPPER';
        }
        else{
            return 'SCISSOR';
        }

    }
    score_up();
}

function score_up(){
    document.querySelector('.score').
    innerText=`Win:: ${score.win} \nLost:: ${score.lost}\n Tie:: ${score.tie}`;
}