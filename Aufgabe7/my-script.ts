window.addEventListener('load', function () {

    const germany = "Deutschland";
    const italy = "Italien";
    const france = "Frankeich";
    const spain = "Spanien";
    const population2022DE = 83803014;
    const population2020DE = 83651225;
    const population2022IT = 60629462;
    const population2020IT = 60505719;
    const population2022FR = 66050242;
    const population2020FR = 65202014;
    const population2022SP = 46467847;
    const population2020SP = 46745832;
    const population2020 = 447,7;
    const population2022 = 446,8;

    let ProzentD = (1 - population2020DE / population2022DE) * 100;
    let ProzentIT = (1 - population2020IT / population2022IT) * 100;
    let ProzentFR = (1 - population2020FR / population2022FR) * 100;
    let ProzentSP = (1 - population2020SP / population2022SP) * 100;
    let Prozent = (1 - population2020 / population2022) * 100;

    let numberDE = (population2022DE - population2020DE);
    let numberIT = (population2022IT - population2020IT);
    let numberFR = (population2022FR - population2020FR);
    let numberSP = (population2022SP - population2020SP);
    let number = (population2022 - population2020);


    document.querySelector(".stars").addEventListener("click", function () {
        document.querySelector(".population").innerHTML = population2022.toString() + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der EU in 2022";
        document.querySelector(".percent").innerHTML = Prozent.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = population2020.toString() + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der EU in 2020";
        document.querySelector(".number").innerHTML = number.toString() + "Mio";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in der europäischen Union";
    })



    document.querySelector(".france").addEventListener("click", function () {
        document.querySelector(".population").innerHTML = (population2022FR / 1000000).toFixed(2) + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
        document.querySelector(".percent").innerHTML = ProzentFR.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = (population2020FR / 1000000).toFixed(2) + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2020";
        document.querySelector(".number").innerHTML = numberFR.toString() + "Mio";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in Frankreich";
    })

    document.querySelector(".italy").addEventListener("click", function () {
        document.querySelector(".population").innerHTML = (population2022IT / 1000000).toFixed(2) + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
        document.querySelector(".percent").innerHTML = ProzentIT.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = (population2020IT / 1000000).toFixed(2) + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2020";
        document.querySelector(".number").innerHTML = numberIT.toString() + "Mio";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in Italien";
    })

    document.querySelector(".germany").addEventListener("click", function () {
        document.querySelector(".population").innerHTML = (population2022DE / 1000000).toFixed(2) + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
        document.querySelector(".percent").innerHTML = ProzentD.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = (population2020DE / 1000000).toFixed(2) + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2020";
        document.querySelector(".number").innerHTML = numberDE.toString() + "Mio";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in Deutschland";
    })


    document.querySelector(".spain").addEventListener("click", function () {
        document.querySelector(".population").innerHTML = (population2022SP / 1000000).toFixed(2) + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022";
        document.querySelector(".percent").innerHTML = ProzentSP.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = (population2020SP / 1000000).toFixed(2) + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2020";
        document.querySelector(".number").innerHTML = numberSP.toString() + "Mio";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in Spanien";
    })


    console.log("In " + germany + " beträgt die aktuelle Einwohnerzahl " + population2022DE);


    console.log("In " + germany + " betrug die Einwohnerzahl 2020 " + population2020DE);


    console.log("Die Einwohnerzahl in " + germany + " ist in den letzten 2 Jahren um " + ProzentD + " % gestiegen.");


    console.log("In " + italy + " beträgt die aktuelle Einwohnerzahl " + population2022IT);


    console.log("In " + italy + " betrug die Einwohnerzahl 2020 " + population2020IT);


    console.log("Die Einwohnerzahl in " + italy + " ist in den letzten 2 Jahren um " + ProzentIT + " % gestiegen.");


    console.log("In " + france + " beträgt die aktuelle Einwohnerzahl " + population2022FR);


    console.log("In " + france + " betrug die Einwohnerzahl 2020 " + population2020FR);


    console.log("Die Einwohnerzahl in " + france + " ist in den letzten 2 Jahren um " + ProzentFR + " % gestiegen.");


    console.log("In " + spain + " beträgt die aktuelle Einwohnerzahl " + population2022SP);


    console.log("In " + spain + " betrug die Einwohnerzahl 2020 " + population2020SP);


    console.log("Die Einwohnerzahl in " + spain + " ist in den letzten 2 Jahren um " + ProzentSP + " % gesunken.");


    //https://countrymeters.info/de

})