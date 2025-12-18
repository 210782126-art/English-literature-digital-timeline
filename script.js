document.addEventListener("DOMContentLoaded", () => {
  console.log("JS is running");

  const nodes = document.querySelectorAll(".timeline-node");
  const contentBox = document.getElementById("content-box");
  const title = document.getElementById("content-title");
  const text = document.getElementById("content-text");
  const image = document.getElementById("display-image");
  const initialMessage = document.getElementById("initial-message");

  const data = {
    1: {
      title: "Oliver Twist (1837)",
      text: "The Moral Topic in Oliver Twist is the reformation of the poor law. The novel came out in the wake of the reformation of the poor law. Compared to the Old Poor Law, the New Poor Law degrades the standard of food and accommodation in workhouse in case someone would give up his or her own job and sponge off the workhouse. It suggests that at Victorian the overly comfortable condition in workhouse is thought to lead to moral degeneration of the poor. The ethical inclination behind it is that poverty was related to moral corruption. And that was why when Oliver said “Please, sir, I want more.”(Dickens 110), what he received were spit and punishment. The novel spent many pages on how the upper class was dismissive of the poor. That is closely related to the social attitude towards the poor. And this disdainful attitude indicates that the country has lost compassion and sank into an ethic dead zone in the way of pursuing technology. So, the whole novel represents an urgent demand for Humanitarianism, showing Dicken’s moral criticism towards Victorian society. Originally published in monthly magazine installments, Oliver Twist reached a broad Victorian audience, shaping public awareness of poverty and workhouse abuses and fueling debates about social reform",
      image: "images/image1.png"
    },
    2: {
      title: "The Importance of Being Earnest (1894)",
      text: "The Moral Topic in The Importance of Being Earnest is the idea art for art’s sake. Yet by the late 19th century, Humanitarianism didn’t come back as Dicken wished, and the hypocrisy even intensified when the country was pursuing material wealth and colonial accumulation. Some intellectuals have been dissatisfied by the moral degeneration in Victorianism for a long time but can do nothing about it. Thus, they withdrew from the public moral quest and retrieved into their own ivory tower. King Wilde was one of the presentive of them, who suggest the idea “Art for the art’s sake”, noting that the purpose of art can simply be to delight rather than to instruct. The idea is not only a manifestation of the disappointment intellectuals, but a resistance towards the fake and rigid moral order of the Victorian. First staged in 1895, The Importance of Being Earnest spread through theatre culture. As a stage comedy, it relies on theatre’s inherent emphasis on performance, satirizing the hypocrisy in Victorianism instead of delivering a moral lesson, which perfectly aligns with the idea art for art’s sake.",
      image: "images/image2.png"
    },
    3: {
      title: "Lord of the Flies (1954)",
      text: "The Moral Topic in it is dark view of human nature. After two World Wars, when public witnessed the human atrocities in war, the previous tumbledown moral system was thoroughly destroyed. People finally realized the truth that the nature of humans is dark. Unlike the writers who suggests “art for the art’s sake”, intellectuals like William Golding manage to register the darkness in human nature, appealing public to rebuild a moral system. By describing the behavior of a group of innocent kids surviving on a distant island, Lord of The Flies demonstrates the dark side of human soul under disorder state, noting that human civilization is fragile, and humanity can easily regress under disorder state. And precisely because the nature of humans is dark, the book indicates that people should employ reason, humility and cooperation to overcome the wick nature to rebuild a moral world. Released through mass-market print publishing in 1954, Lord of the Flies benefited greatly from affordable paperback circulation and postwar educational distribution. These media channels expanded their readership beyond literary elites, ensured its inclusion in schools, and transformed the novel from a modest publication into an influential cultural text recognized globally.",
      image: "images/image3.png"
    },
    4: {
      title: "Klara and the Sun (2021)",
      text: "The moral topic in it is Posthumanism. In the early twenty-first century, as artificial intelligence (AI) began to blur the boundaries between human and AI, the traditional belief in human uniqueness is challenged, raising sequent moral crisis about what truly makes a person human. Unlike the previous writers who struggled within human’s own ethical issues, Kazuo Ishiguro turns his attention to the line between human and non-human, focusing on what consists of the human heart. In Klara and the Sun, he explained the human heart as “a house with many rooms … rooms within rooms within rooms”(Ishiguro 38), to question whether any artificial being could truly access or replicate the depths of human complexity, and whether AI can truly replace human. By presenting Klara as capable of empathy and longing, the novel suggests that in a posthuman age, moral value depends not on biology but on relationships and compassion. Circulating widely through global print publishing, book-club promotion, and digital reading platforms after its 2021 release, the novel reached diverse international audiences, stimulating cross-disciplinary discussions in AI ethics.",
      image: "images/image4.png"
    }
  };

  console.log("nodes length:", nodes.length);
  nodes.forEach(node => {
    node.addEventListener("click", () => {
      const index = node.dataset.index;
      console.log("clicked",index);
      const item = data[index];

      if (!item) return;

      initialMessage.style.display = "none";
      contentBox.classList.remove("hidden");

      title.textContent = item.title;
      text.textContent = item.text;
      image.src = item.image;
    });
  });

refBtn = document.getElementById("ref-btn");
refOverlay = document.getElementById("ref-overlay");
closeRef = document.getElementById("close-ref");

refBtn.addEventListener("click", () => {
  refOverlay.classList.remove("hidden");
});

closeRef.addEventListener("click", () => {
  refOverlay.classList.add("hidden");
});

// 点击背景关闭
refOverlay.addEventListener("click", (e) => {
  if (e.target === refOverlay) {
    refOverlay.classList.add("hidden");
  }
});
});