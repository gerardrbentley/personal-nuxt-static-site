<template>
  <div class="blog-page content relative">
    <div class="w-full h-16 font-bold text-xl bg-dark text-white">WORK IN PROGRESS</div>
    <div class="container w-11 border-2 border-dark bg-primary-100">
      This is a curated list of papers that have been relevant to one or more of
      our projects, separated by project and rough topic. Please raise any
      broken links in a gitlab Issue * HyPED [download
      link](https://www.aaai.org/ocs/index.php/AIIDE/AIIDE17/paper/download/15900/15170)
      Modeling and Analyzing Action Games as Hybrid Systems. Joe Osborn et Al. *
      Game Understanding
      [link](http://www.cig2017.com/wp-content/uploads/2017/08/paper_95.pdf)
      Automated Game Design Learning. Joe Osborn et Al.
      [link](https://arxiv.org/pdf/1606.07487.pdf) Video Game Level Corpus. Adam
      Summerville et Al. [link](https://arxiv.org/pdf/1802.10217.pdf)
      Investigating Human Priors for playing Video Games. Dubey et Al.
      [link](http://www.exag.org/papers/EXAG_2019_paper_13.pdf) Videogame
      Affordances Corpus. Joe Osborn and Gerard Bentley. * Convolutional Neural
      Nets (Image Processing) [link](https://arxiv.org/pdf/1511.00561.pdf) A
      Deep Convolutional Encoder-Decoder Architecture for Image Segmentation.
      Kendall et Al. [examples](https://mi.eng.cam.ac.uk/projects/segnet/) of
      scene understanding * AI Gameplay Agents
      [link](https://tomaxent.com/2017/07/07/Demystifying-Deep-Reinforcement-Learning/)
      Demystifying Deep Reinforcement Learning. Someone else's blog post.
      Concise guide on Reinforcement Learning that highlights the following
      topics `Reinforcement Learning`, `Markov process`, `Rewards`,
      `Q-learning`, `Exploration-Exploitation`, and `Deep Q-Learning`.
      [link](https://www.nature.com/articles/nature14236.pdf) Human level
      control through deep reinforcement learning. Mnih et Al. Deepmind. More
      thorough follow up to [previous](https://arxiv.org/pdf/1312.5602v1.pdf)
      deepmind atari paper. One of the most cited Reinforcement Learning papers.
      [link](https://arxiv.org/pdf/1901.10995.pdf) Go-explore. Ecoffet et Al.
      Montezuma's Revenge and Pitfall at superhuman level. Exploits `starting
      over` from promising points in its exploration to learn a policy.
    </div>
  </div>
</template>

<script>
const title = "Gerard Bentley - Lost Crumbs";
const description = "Full-Stack Development and Daily Computing Blog.";

export default {
  transition: {
    name: "slide-fade"
  },

  head() {
    return {
      title: title,
      meta: [
        { name: "author", content: "Gerard Bentley" },
        {
          name: "description",
          property: "og:description",
          content: description,
          hid: "description"
        },
        { property: "og:title", content: title },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  }
};
</script>
