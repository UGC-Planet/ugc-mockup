<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" temporary>
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider">
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 100%">
                <section data-bs-version="5.1" class="features5 cid-uhtljYsniE" id="features010-e">
                    <div class="container">
                        <v-toolbar color="transparent">
                            <v-toolbar-title>
                                <div class="mbr-section-head pb-4">
                                    <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-5">Requests
                                    </h4>

                                </div>
                            </v-toolbar-title>

                            <div class="d-flex justify-center align-center h-100">
                                <v-btn color="primary" @click.stop="drawer = !drawer" size="x-large"
                                    style="margin: 10px;">
                                    Filter
                                </v-btn>
                            </div>
                        </v-toolbar>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-12 col-lg-4 md-pb">
                                <div class="card1 item-wrapper">
                                    <div class="item-content">
                                        <h6 class="item-subtitle align-right mb-1 mbr-fonts-style display-7">
                                            Professional Tools
                                            Kit</h6>
                                        <h5 class="item-title2 align-left mb-4 mbr-fonts-style display-5">Illustration
                                            Design</h5>
                                    </div>
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-change-style mobi-mbri"></span>
                                    </div>
                                    <div class="item-content">

                                        <div class="mbr-flex mt-3">

                                            <div class="mbr-section-btn align-right"><a href=""
                                                    class="btn item-btn btn-white display-7" target="_blank"><span
                                                        class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>Details</a>
                                            </div>
                                            <p class="price align-right mb-0 mbr-fonts-style display-5">12$</p>


                                        </div>
                                        <p class="mbr-text align-right mt-3 mb-0 mbr-fonts-style display-4">Lorem ipsum
                                            dolor sit amet.</p>


                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-12 col-lg-4 md-pb">
                                <div class="card2 item-wrapper">
                                    <div class="item-content">
                                        <h6 class="item-subtitle align-right mb-1 mbr-fonts-style display-7">
                                            Professional Tools
                                            Kit</h6>
                                        <h5 class="item-title2 align-left mb-4 mbr-fonts-style display-5">Digital Art
                                        </h5>
                                    </div>
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-code mobi-mbri"></span>
                                    </div>
                                    <div class="item-content">

                                        <div class="mbr-flex mt-3">

                                            <div class="mbr-section-btn align-right"><a href=""
                                                    class="btn item-btn btn-white display-7" target="_blank"><span
                                                        class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>Details</a>
                                            </div>
                                            <p class="price align-right mb-0 mbr-fonts-style display-5">12$</p>


                                        </div>
                                        <p class="mbr-text align-right mt-3 mb-0 mbr-fonts-style display-4">Lorem ipsum
                                            dolor sit amet.</p>


                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-12 col-lg-4">
                                <div class="card3 item-wrapper">
                                    <div class="item-content">
                                        <h6 class="item-subtitle align-right mb-1 mbr-fonts-style display-7">
                                            Professional Tools
                                            Kit</h6>
                                        <h5 class="item-title2 align-left mb-4 mbr-fonts-style display-5">Fashion Design
                                        </h5>
                                    </div>
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-website-theme mobi-mbri"></span>
                                    </div>
                                    <div class="item-content">

                                        <div class="mbr-flex mt-3">

                                            <div class="mbr-section-btn align-right"><a href=""
                                                    class="btn item-btn btn-white display-7" target="_blank"><span
                                                        class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>Details</a>
                                            </div>
                                            <p class="price align-right mb-0 mbr-fonts-style display-5">12$</p>


                                        </div>
                                        <p class="mbr-text align-right mt-3 mb-0 mbr-fonts-style display-4">Lorem ipsum
                                            dolor sit amet.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Requests'
    })
</script>