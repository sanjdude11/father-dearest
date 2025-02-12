function showEra(era) {
    let eraText = {
        "ancient": "The earliest trumpets date back to 1500 BC, used for communication and religious rituals.",
        "medieval": "Medieval trumpets were long and straight, mainly used for royal announcements and military calls.",
        "baroque": "Baroque trumpets had no valves and were often used in orchestral and chamber music settings.",
        "modern": "Modern trumpets have valves that allow a wide range of musical notes, used in jazz, classical, and pop music."
    };

    document.getElementById("era-info").innerText = eraText[era];
}
