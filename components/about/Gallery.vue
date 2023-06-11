<template>
  <div class="container">
    <div class="gallery">
      <h2>Our Awesome Gallery</h2>
      <ul class="blog-gallery">
        <li v-for="(image, index) in gallery.slice(0, 6)" :key="index" style="display: inline-block; margin: 0 5px 5px 0">
          <a @click="openGallery(index)">
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            <img :src="image" alt="image" />
          </a>
        </li>
        <!-- <li v-for="(image, index) in media" :key="index" style="display: inline-block; margin: 0 5px 5px 0">
          <a @click="openGallery(index)">
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            <span class="layer"></span>
            <img :src="image" alt="image" />
          </a>
        </li> -->
      </ul>
      <CoolLightBox :items="gallery.map((one) => (one ? one : ''))" :index="imageIndex" @close="imageIndex = null" />
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutGallery",
  props: ["gallery"],
  components: {},
  mounted() {
    console.log(this.gallery)
  },
  data() {
    return {
      media: [
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img1.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img2.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img3.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img4.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img5.jpg",
        "https://templates.hibootstrap.com/techex/default/assets/images/blog/blog-small-img6.jpg",
      ],
      imageIndex: null,
    };
  },
  methods: {
    openGallery(i) {
      this.imageIndex = i;
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .blog-gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 2px solid var(--main-color);

      img {
        width: 200px;
        height: 200px;
      }

      a {
        i {
          position: absolute;
          display: grid;
          place-content: center;
          font-size: 1.5rem;
          background-color: var(--main-color);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          z-index: -1;
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }

        .layer {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--main-color);
          opacity: 0.3;
          z-index: -1;
          opacity: 0;
        }
      }

      &:hover {
        a {

          i,
          .layer {
            z-index: unset;
          }

          i {
            opacity: 1;
          }

          .layer {
            opacity: 0.3;
          }
        }
      }
    }
  }
}
</style>