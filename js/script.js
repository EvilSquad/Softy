function dialog() {
    let userName;
    let userAge;

    result = confirm("Want to discover games you might be interested in?")
    if (result ===  true) {
        userName = prompt("Enter your name:");
        userAge = prompt("Enter your age:");
    
        result = confirm("Your name is:\n"+userName+"\nand your age is\n"+userAge+"?");
        if (result ===  true) {
            let i = 0;
            while (i < 4) {
                alert("Loading: "+i*33+"%");
                i++;
            }

            if (userAge >= 0 && userAge <= 8) {
                alert("Games that are suitable for you:\nMinecraft: Education Edition;\nSuper Mario Odyssey;\nLEGO City Undercover;\nPaw Patrol On A Roll;\nToca Boca.");
            }
            else if (userAge >= 9 && userAge <= 18) {
                alert("Games that are suitable for you:\nThe Legend of Zelda: Breath of the Wild;\nKerbal Space Program;\nCivilization VI;\nStardew Valley;\nRoblox.");
            }
            else if (userAge >= 19) {
                alert("Games that are suitable for you:\nThe Witcher 3: Wild Hunt;\nRed Dead Redemption 2;\nDark Souls III;\nCyberpunk 2077;\nAssassin's Creed Mirage.");
            }
            else {
                alert("No games found for your age. Try again.");
            }
            result = confirm("Do you want to repeat your entry?");
            if (result ===  true) {
                dialog()
            }
        }
        else {
            dialog()
        }
    }
    else {
        alert("If you want to find out the games that may suit you, click on the button 'Games'.");
    }
}