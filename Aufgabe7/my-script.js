window.addEventListener('load', function () {
    const germany = "Deutschland";
    const italy = "Italien";
    const france = "Frankeich";
    const spain = "Spanien";
    const eu = "der europäischen Union";
    const population2022DE = 83803014;
    const population2020DE = 83651225;
    const population2022IT = 60629462;
    const population2020IT = 60505719;
    const population2022FR = 66050242;
    const population2020FR = 65202014;
    const population2022SP = 46467847;
    const population2020SP = 46745832;
    const population2020 = 447700000;
    const population2022 = 446800000;
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
    const chart = document.querySelector(".chart");
    function calc(thisPop2020, thisPop2022, thisNumber, thisPercent, name) {
        document.querySelector(".population").innerHTML = (thisPop2022 / 1000000).toFixed(2) + "Mio";
        document.querySelector(".populationtext").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + name + " in 2022";
        document.querySelector(".percent").innerHTML = thisPercent.toFixed(2) + "%";
        document.querySelector(".pop2020").innerHTML = (thisPop2020 / 1000000).toFixed(2) + "Mio";
        document.querySelector(".pop2020text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + name + " in 2020";
        document.querySelector(".thenumber").innerHTML = (thisNumber / 1000).toFixed(2) + "Tsd";
        document.querySelector(".headline").innerHTML = "Einwohnerzahl in " + name;
        document.querySelector(".chart").setAttribute("style", "height:" + ((1 - thisPop2022 / population2022) * 100) + "%;");
    }
    document.querySelector(".france").addEventListener("click", function () {
        calc(population2020FR, population2022FR, numberFR, ProzentFR, france);
    });
    document.querySelector(".germany").addEventListener("click", function () {
        calc(population2020DE, population2022DE, numberDE, ProzentD, germany);
    });
    document.querySelector(".italy").addEventListener("click", function () {
        calc(population2020IT, population2022IT, numberIT, ProzentIT, italy);
    });
    document.querySelector(".spain").addEventListener("click", function () {
        calc(population2020SP, population2022SP, numberSP, ProzentSP, spain);
    });
    document.querySelector(".stars").addEventListener("click", function () {
        calc(population2020, population2022, number, Prozent, eu);
    });
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
});
//# sourceMappingURL=my-script.js.map