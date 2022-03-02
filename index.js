// function buttonAnimation()
// {
//     document.querySelector('button').classList.add(".pressed")
// }


for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        if(this.innerText=='w')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('crash.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700); 
            
        }
        else if(this.innerText=='a')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('kick-bass.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);y();
        }
        else if(this.innerText=='s')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('snare.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);
        }
        else if(this.innerText=='d')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('tom-1.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);
        }
        else if(this.innerText=='j')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('tom-2.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);
        }
        else if(this.innerText=='k')
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('tom-3.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);
        }
        else
        {
            document.querySelector("."+this.innerText).classList.add("pressed");
            new Audio('tom-4.mp3').play();
            setTimeout(() => {
                document.querySelector("."+this.innerText).classList.remove("pressed");
            }, 700);
        }
    })
    
}


document.addEventListener("keypress",function(key)
{
    // document.querySelectorAll("button")[i].classList.add(".pressed");
    if(key.key=='w')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('crash.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700); 
       
    }
    else if(key.key=='a')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('kick-bass.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    }
    else if(key.key=='s')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('snare.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    }
    else if(key.key=='d')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('tom-1.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    }
    else if(key.key=='j')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('tom-2.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    }
    else if(key.key=='k')
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('tom-3.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    }
    else
    {
        document.querySelector("."+key.key).classList.add("pressed");
        new Audio('tom-4.mp3').play();
        setTimeout(() => {
            document.querySelector("."+key.key).classList.remove("pressed");
        }, 700);
    } 
})