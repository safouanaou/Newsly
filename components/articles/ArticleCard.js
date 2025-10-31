export default {
    name: "ArticleCard",


    props: {
        article: {
            type: Object,
            required: true
        },
        isMain: {
            type: Boolean,
            default: false
        }
    },


    emits: ['show-detail'],


    data() {
        return {
            isVisible: true
        };
    },


    computed: {
        imagePath() {
            return `./media/${this.article.image}`;
        }
    },

    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },

        onCardClick() {
            this.$emit('show-detail', this.article);
        }
    },

    template: `
      <div class="d-flex flex-column article-card card mb-3" @click="onCardClick">

        <div v-if="isVisible">
          <div class="image-container my-2 mx-2">
            <img :src="imagePath" class="img-fluid w-100 h-100" alt="">
          </div>

          <h2 class="card-title px-2">{{ article.title }}</h2>
          <p class="card-text px-2">{{ article.body }}</p>
        </div>

        <button 
          v-if="isMain"
          class="btn btn-secondary btn-sm m-2"
          
          @click.stop="toggleVisibility"
        >
          {{ isVisible ? 'Masquer' : 'Afficher' }}
        </button>

      </div>
    `
};