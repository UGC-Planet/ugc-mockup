<template>
    <div>
        <section data-bs-version="5.1" class="video01 modelm5 cid-uhtrMswMuS" id="video01-s">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="content-wrapper">


                        </div>
                        <div class="box">
                            <div class="mbr-media show-modal align-center" data-modal=".modalWindow">
                                <img src="../../assets/images/background2.jpg" alt="">
                                <div class="icon-wrap">
                                    <span class="mbr-iconfont mobi-mbri-play mobi-mbri"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-toolbar title="Request Name">
                    <v-toolbar-items>
                        <v-list-item title="Language" subtitle="English"></v-list-item>

                        <v-list-item title="Location" subtitle="London, England"></v-list-item>

                        <v-list-item title="Social">
                            <v-btn title="Facebook" href="" variant="text"><img src="../../assets/images/Facebook.svg"
                                    alt="UGC Planet Facebook"></v-btn>
                            <v-btn title="Twitter" href="" variant="text"><img src="../../assets/images/Twitter.svg"
                                    alt="UGC Planet Twitter" variant="text"></v-btn>
                            <v-btn title="Instagram" href="" variant="text"><img src="../../assets/images/Instagram.svg"
                                    alt="UGC Planet Intagram" variant="text"></v-btn>
                            <v-btn title="Pinterest" href="" variant="text"><img src="../../assets/images/Pinterest.svg"
                                    alt="UGC Planet Pinterest" variant="text"></v-btn>
                            <v-btn title="YouTube" href="" variant="text"><img src="../../assets/images/YouTube.svg"
                                    alt="UGC Planet YouTube" variant="text"></v-btn>
                            <v-btn title="TikTok" href="" variant="text"><img src="../../assets/images/Tiktok.svg"
                                    alt="UGC Planet TikTok"></v-btn>
                        </v-list-item>

                        <v-list-item>
                            <v-btn color="purple" href="">Send a Message</v-btn>
                        </v-list-item>

                        <v-list-item>
                            <v-btn color="purple" href="">Make an Offer</v-btn>
                        </v-list-item>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
            <div>
                <div class="modalWindow" style="display: none">
                    <div class="modalWindow-container">
                        <div class="modalWindow-video-container">
                            <div class="modalWindow-video">
                                <iframe width="100%" height="100%" frameborder="0" allowfullscreen="1"
                                    data-src="https://www.youtube.com/watch?v=-BSQlJxCDcI&amp;loop=1&amp;autoplay=1"></iframe>
                            </div>
                            <a class="close" role="button" data-dismiss="modal" data-bs-dismiss="modal">
                                <span aria-hidden="true"
                                    class="mbr-iconfont mobi-mbri-close mobi-mbri closeModal"></span>
                                <span class="sr-only visually-hidden visually-hidden">Close</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="article04 legalm5 cid-uhtssLBff9" id="article04-t">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-7">
                        <div class="content-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                                About the Attorney Firm
                            </h2>
                            <p class="mbr-text_1 mbr-fonts-style display-7">
                                Attorneys provide clients with legal advice and guidance on a wide range of issues. They
                                help
                                clients understand their rights and responsibilities under the law, as well as the
                                potential
                                legal implications of their actions. Clients often seek legal counsel when making
                                important
                                decisions or facing legal challenges.
                            </p>
                            <div class="list-wrapper">
                                <h3 class="mbr-list-title mbr-fonts-style display-7">
                                    OUR MAIN FUNCTIONS:
                                </h3>
                                <ul class="list mbr-fonts-style display-7">
                                    <li class="item-wrap">Representation in Court</li>
                                    <li class="item-wrap">Document Drafting and Review</li>
                                    <li class="item-wrap">Negotiation and Mediation</li>
                                    <li class="item-wrap">Legal Research</li>
                                    <li class="item-wrap">Estate Planning</li>
                                </ul>
                            </div>
                            <p class="mbr-text_2 mbr-fonts-style display-7">
                                These are just some of the many functions that attorney firms perform to serve the legal
                                needs
                                of their clients and ensure that justice is upheld within the legal system. The specific
                                areas
                                of expertise and services offered can vary widely depending on the type and size of the
                                firm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: ''
    })
</script>