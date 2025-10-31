const Card = {
    template: `
        <div class="d-flex flex-column article-card">
            <div class="image-container my-2 mx-2">
                <img src="./media/0ab4193e0172a40f1fc2cc2c951024a2-1701435404.jpg" class="img-fluid w-100 h-100" alt="">
            </div>
            <h2>Title</h2>
            <p>55</p>
        </div>
    `,

    props: [],

    data(){
        return {
            isContentVisible: true
        }
    },
}