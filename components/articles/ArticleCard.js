const Card = {
    template: `
        <div class="d-flex flex-column article-card">
            <div class="image-container my-2 mx-2">
                <img src="image" class="img-fluid w-100 h-100" alt="">
            </div>
            <h2>{{ title }}</h2>
            <p v-if="isContentVisible>{{ content }}</p>
            <button @click="" v-if="isMain">Masquer</button>
        </div>
    `,

    props: {
        title: String,
        image: String,
        content: String,
        isMain: Boolean
    },

    data(){
        return {
            isContentVisible: true,
            isVisible: true
        }
    },

}