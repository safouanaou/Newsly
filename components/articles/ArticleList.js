
import ArticleCard from './ArticleCard.js';


export default {

    name: "ArticleList",
    
    components: {
        ArticleCard
    },

    props: {
        articles: {
            type: Array,
            required: true
        },
        isMainList: {
            type: Boolean,
            default: false
        }
    },

    emits: ['article-clicked'],

    template: `
      <div class="article-list">
        <article-card
          v-for="article in articles"
          :key="article.id"
          :article="article"
          :is-main="isMainList"
          @show-detail="handleCardClick" 
        >
        </article-card>
      </div>
    `,

    methods: {
        handleCardClick(article) {
            this.$emit('article-clicked', article);
        }
    }
};
