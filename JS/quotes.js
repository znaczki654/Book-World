var quotes = ['Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do ~ H.Jackson Brown Jr., P.S. I Love You', 'Here is some good in this world, and it’s worth fighting for ~ J.R.R. Tolkien, The Two Towers', 'Get busy living, or get busy dying ~ Stephen King, Different Seasons','The goal isn’t to live forever, the goal is to create something that will ~ Chuck Palahniuk, Diary','None of us really changes over time. We only become more fully what we are ~ Anne Rice, The Vampire Lestat','All endings are also beginnings. We just don’t know it at the time ~ Mitch Albom, The Five People You Meet In Heaven','It’s no use going back to yesterday, because I was a different person then ~ Lewis Carroll, Alice’s Adventures in Wonderland','The only limits for tomorrow are the doubts we have today ~ Pittacus Lore, The Power of Six', 'It is our choices that show what we truly are, far more than our abilities ~ J.K. Rowling, Harry Potter and the Chamber of Secrets','If we wait until we’re ready, we’ll be waiting for the rest of our lives ~ Lemony Snicket, The Ersatz Elevator']

var number = Math.floor(Math.random()*10)+1;

addEventListener('load', nextQuote, false);

function nextQuote()
{
    show();
    number++;
    if(number>9)
        {
            number=1;
        }
    
    document.getElementById('quotes').innerHTML = quotes[number];
    
    setTimeout('nextQuote()',5500);
    setTimeout('hide()',5000);
}

function hide()
{
    $("#quotes").fadeOut(500);
}
function show()
{
    $("#quotes").fadeIn(500);
}