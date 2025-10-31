const Card = {
    template: `
        <div class="d-flex flex-column article-card">
            <div class="image-container my-2 mx-2">
                <img src="image" class="img-fluid w-100 h-100" alt="">
            </div>
            <h2>{{ title }}</h2>
            <p v-if="isContentVisible>{{ content }}</p>
        </div>
    `,

    props: {
        title: String,
        image: String,
        content: String,
    },

    data(){
        return {
            isContentVisible: true
        }
    },
}