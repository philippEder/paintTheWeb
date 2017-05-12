var StoryTeller = {
     story : "The Little Girl Who Wasn't, from LadySparrow | I lived in a house from hell for four years, from age eleven to almost sixteen. There was constantly something happening. Doors flying open and shut, voices, footsteps. Nothing ever stayed where you put it. I was alone there a lot because both my parents worked and I was constantly terrified. | One of the most gut-level disturbing things though was the little girl in my bathroom. Every time I walked past my bathroom door (which was constantly since it was right outside my bedroom) I saw a little girl with blond curled hair and a rose-colored dress. She just stood there, staring, looking like a photograph from 1905. I started keeping the door closed so I could walk by without seeing her, but she was always there when I opened it. Once I stepped in past her, I couldn't see her anymore but I could feel her there. She scared me, but I felt really sorry for her because she was trapped there, just like me, but probably forever. | As the years went by and things in the house continued to get worse, she started seeming... darker. I started feeling like she wasn't really a little girl. I knew there was something ugly in the house and I felt like it was presenting this sympathetic image to me. Then I started thinking I was completely losing my mind. | One day, when I was 14, I had a friend from out of town come stay with me for a week. I hadn't told her anything whatsoever about the house because I didn't think she would come if I did. Right after she got there we were sitting in my room and she left to go to the bathroom. About a minute later she walked back in with a puzzled look on her face and said 'So, there's a little girl in your bathroom'. 'Um, I, yeah she hangs out in there. Blond hair?' 'Curls? Pink dress? Yeah. You know that's not really a little girl, don't you?' I almost threw up. I was so relieved and terrified and excited and ready to run out of the house screaming. She wouldn't use my bathroom the rest of the week and I started using it as little as possible without pissing off my parents (who did not want to believe). | Eventually we moved out and I could not have been happier. I distanced myself from it mentally as much as I could. Then, when I was 18, I took another friend on a road trip to pack up a few things I'd left in the house (my parents hadn't managed to sell it, and wouldn't for 5 more years). The minute we got on the property, my friend seemed uncomfortable. When we came around the bend in the long, steep driveway, he went completely white. I could tell something was wrong, but he insisted he was OK, so we got to work. After a while he asked to use the bathroom and I directed him to mine. Not 20 seconds after he left, he came running back in, gasping for breath, andand slammed the bedroom door behind him. He started babbling about a little blond girl who isn't really a little girl. All of a sudden he went dead still, looked me in the eye, and very solemnly said 'She's not happy. With you. You left, and you weren't supposed to'. We threw whatever we could grab in two trips in my car (after I walked him to another bathroom and waited outside the door) and got the fuck out at top speed.",


    tellStory : function() {
        var storyFragments = this.story.split("|");
        var actFragment = storyFragments[0];
        var index = 1;
        var waitingTimes = [];

        document.getElementById("storyBox").innerHTML=actFragment;
        
        setInterval(function() {
            actFragment=storyFragments[index];
            if (actFragment === undefined) {
                index = 0;
            } else {
                index++;
            }
            document.getElementById("storyBox").innerHTML=actFragment;  
        },12000);    
    }    
}


