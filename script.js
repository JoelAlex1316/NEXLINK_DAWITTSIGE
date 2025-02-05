document.getElementById("saveContact").addEventListener("click", () => {
    // Contact information
    const contactInfo = {
        name: "Dawit Tsige",
        company: "DAWIT BAND",
        address: "Addis Ababa, Ethiopia",
        phone: "+251974404040",
        email: "dimkidista@yahoo.com",
        poBox: "5912"
    };

    // Generate vCard content
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
ADR;TYPE=WORK,PREF:;;${contactInfo.address}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.poBox}
END:VCARD`;

    // Create a blob for the vCard file
    const blob = new Blob([vCard], { type: "text/vcard" });

    // Create a link element to download the file
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${contactInfo.name.replace(/\s+/g, "_")}_Contact.vcf`;
    a.click();
});


function createMusicParticles() {
    const particleContainer = document.querySelector('.music-particles');
    const numParticles = 5; // Number of particles

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('music-particle');
        particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        particle.style.animationDuration = `${Math.random() * 8 + 5}s`; // Random animation speed
        particle.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        particleContainer.appendChild(particle);
    }
}

createMusicParticles();