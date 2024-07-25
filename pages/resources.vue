<template>
    <div>
        <section data-bs-version="5.1" class="tutorm5 header1 cid-uhyNZ7Sj39" id="header1-1b">



            <div class="round"></div>

            <img class="face1" src="../assets/images/team1.jpg" alt="">
            <img class="face2" src="../assets/images/team2.jpg" alt="">
            <img class="face3" src="../assets/images/team2.jpg" alt="">
            <img class="face4" src="../assets/images/team3.jpg" alt="">




            <div class="container">
                <div class="row">
                    <div class="content-wrap col-12 col-md-9">



                        <div class="tags mb-5 w-100">

                        </div>

                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">Start your Journey with
                            Us</h1>

                        <p class="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                            Thousands of Creators in the Facebook, YouTube and many more sectors are waiting for you..
                            Thousands of Creators in the Facebook, YouTube and many more sectors are waiting for
                            you.<br>
                        </p>
                        <div class="mbr-section-btn"><a class="btn btn-primary display-7" href="#">Explore our
                                Resources</a></div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features2 expertm5 cid-uhyTu6a3fa" id="afeatures2-1g">
            <div class="align-center container-fluid">
                <div class="row">
                    <div class="card col-12 col-sm-6 col-md-4">
                        <div class="card-box">
                            <div class="iconfont-wrapper">
                                <span class="mbr-iconfont mobi-mbri">1</span>
                            </div>
                            <p class="card-text mbr-fonts-style display-7">
                                Different topics with trends and update</p>
                        </div>
                    </div>

                    <div class="card col-12 col-sm-6 col-md-4">
                        <div class="card-box">
                            <div class="iconfont-wrapper">
                                <span class="mbr-iconfont mobi-mbri">2</span>
                            </div>
                            <p class="card-text mbr-fonts-style display-7">
                                100% Online and Free Access</p>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-6 col-md-4">
                        <div class="card-box">
                            <div class="iconfont-wrapper">
                                <span class="mbr-iconfont mobi-mbri">3</span>
                            </div>
                            <p class="card-text mbr-fonts-style display-7">
                                Unlimited Access to Unlimited Resources</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card class="resourceSection" elevation="0">
            <h4 style="text-align: center; color: gray;">Start Now</h4>
            <h2 style="text-align: center;">Resources</h2>
            <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
                <v-tab :value="1">Brands</v-tab>
                <v-tab :value="2">Creators</v-tab>
                <v-tab :value="3">Tutorials</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="i in 3" :key="i" cols="12" md="4">
                                <v-card class="mx-auto" max-width="400">
                                    <v-img class="align-end text-white" height="200"
                                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                        <v-card-title>AI and Social Media Marketing</v-card-title>
                                    </v-img>

                                    <v-card-subtitle class="pt-4">
                                        Published: 25/07/2024
                                    </v-card-subtitle>

                                    <v-card-text>
                                        <div>Thousands of Creators in the Facebook, YouTube and many more sectors are
                                            waiting for you.. </div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="orange" text="Share">Share</v-btn>

                                        <v-btn color="orange" text="Become A Creator" href="/resource/id">Become A
                                            Creator</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>
            </v-tabs-window>

            <div class="col-12">
                <div class="mbr-section-btn mt-2 align-center mt-2"><a href="" class="btn display-4"><span
                            class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>View all
                        Resources</a></div>
            </div>
        </v-card>

        <v-toolbar style="background-color: #9E88FB; padding: 26px;">
            <div class="resourceTrendingToolbar">
                <v-toolbar-title>Trending Topics</v-toolbar-title>
                <v-toolbar-items>
                    <v-chip variant="elevated">UGC</v-chip>
                </v-toolbar-items>
            </div>
        </v-toolbar>

        <section data-bs-version="5.1" class="formulam5 features7 cid-uhySjYkwis" id="features7-1e">
            <div class="container-fluid">
                <div class="row justify-content-center mb-5">
                    <div class="col-12 mb-0 content-head">
                        <h3 class="mbr-section-title mbr-fonts-style align-center display-5"><strong>Globally Recognised
                                Certifications</strong></h3>

                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="item features-without-image col-12 col-md-6 col-lg-3">
                        <div class="item-wrapper">
                            <div class="card-box align-left">
                                <div class="iconfont-wrapper mb-3">
                                    <span class="mbr-iconfont mobi-mbri-layers mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-5">
                                    <strong>AI Marketing</strong>
                                </h5>
                                <p class="card-text mbr-fonts-style mb-3 display-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nec libero
                                    ut lacinia. Morbi nulla
                                    diam, consectetur euismod hendrerit.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-6 col-lg-3">
                        <div class="item-wrapper">
                            <div class="card-box align-left">
                                <div class="iconfont-wrapper mb-3">
                                    <span class="mbr-iconfont mobi-mbri-touch mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-5">
                                    <strong>AI Marketing</strong>
                                </h5>
                                <p class="card-text mbr-fonts-style mb-3 display-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nec libero
                                    ut lacinia. Morbi nulla
                                    diam, consectetur euismod hendrerit.</p>

                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-6 col-lg-3">
                        <div class="item-wrapper">
                            <div class="card-box align-left">
                                <div class="iconfont-wrapper mb-3">
                                    <span class="mbr-iconfont mobi-mbri-idea mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-5">
                                    <strong>AI Marketing</strong>
                                </h5>
                                <p class="card-text mbr-fonts-style mb-3 display-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nec libero
                                    ut lacinia. Morbi nulla
                                    diam, consectetur euismod hendrerit.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-6 col-lg-3">
                        <div class="item-wrapper">
                            <div class="card-box align-left">
                                <div class="iconfont-wrapper mb-3">
                                    <span class="mbr-iconfont mobi-mbri-idea mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-5">
                                    <strong>AI Marketing</strong>
                                </h5>
                                <p class="card-text mbr-fonts-style mb-3 display-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nec libero
                                    ut lacinia. Morbi nulla
                                    diam, consectetur euismod hendrerit.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-12">

                        <div class="mbr-section-btn mt-2 align-center mt-2"><a href="" class="btn display-4"><span
                                    class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>View all
                                Certifications</a></div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="info2" id="info2-1f">
            <div class="align-center">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-6 leftSkill">
                        <div class="wrapper">
                            <h3 class="mbr-section-title mb-4 mbr-fonts-style display-5">
                                <strong>Learn A Skill</strong></h3>
                            <p class="mbr-text mb-4 mbr-fonts-style display-4">
                                Thousands of Creators in the Facebook, YouTube and many more sectors are waiting for
                                you.. </p>
                            <div class="mbr-section-btn"><a class="btn btn-black display-4" href="#">View all
                                    Courses</a></div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 rightRecognition">
                        <div class="wrapper">
                            <h3 class="mbr-section-title mbr-fonts-style mb-4 display-5">
                                <strong>Earn Recognition</strong></h3>
                            <p class="mbr-text mbr-fonts-style mb-4 display-4">
                                Thousands of Creators in the Facebook, YouTube and many more sectors are waiting for
                                you.. </p>
                            <div class="mbr-section-btn"><a class="btn btn-black display-4" href="#">View all
                                    Certifications</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="firmm4_content6 cid-uhyU6Zx77p" id="content6-1h">
            <div class="container">
                <div class="row align-items-center justify-content-center flex-row-reverse">
                    <div class="col-12 col-md-6 col-sm-8 col-lg order-1">
                        <div class="text-wrapper">

                            <h4 class="mbr-section-title mbr-fonts-style display-2">
                                <strong>Why Choose Us?</strong></h4>

                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12 item">
                                    <div class="card_wrap">
                                        <div class="icon_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <polygon
                                                    points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5"
                                                    fill="hsl(156,80%,50%)"></polygon>
                                            </svg>
                                            <span
                                                class="mbr-iconfont mbr-iconfont-1 mobi-mbri-download-2 mobi-mbri"></span>
                                            <div class="shape_1 shape"></div>
                                            <div class="shape_2 shape"></div>
                                            <div class="shape_3 shape"></div>
                                            <div class="shape_4 shape"></div>
                                        </div>
                                        <h4 class="card_title mbr-fonts-style display-7"><strong>Advance your
                                                career</strong></h4>
                                        <p class="card_text mbr-fonts-style display-4">
                                            Thousands of Creators in the Facebook, YouTube and many more sectors are
                                            waiting for you.. </p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-sm-6 col-12 item">
                                    <div class="card_wrap">
                                        <div class="icon_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <polygon
                                                    points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5"
                                                    fill="hsl(156,80%,50%)"></polygon>
                                            </svg>
                                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-mobile mobi-mbri"></span>
                                            <div class="shape_1 shape"></div>
                                            <div class="shape_2 shape"></div>
                                            <div class="shape_3 shape"></div>
                                            <div class="shape_4 shape"></div>
                                        </div>
                                        <h4 class="card_title mbr-fonts-style display-7">
                                            <strong>Stay ahead the Market</strong></h4>
                                        <p class="card_text mbr-fonts-style display-4">
                                            Thousands of Creators in the Facebook, YouTube and many more sectors are
                                            waiting for you.. </p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-sm-6 col-12 item">
                                    <div class="card_wrap">
                                        <div class="icon_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <polygon
                                                    points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5"
                                                    fill="hsl(156,80%,50%)"></polygon>
                                            </svg>
                                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-mobile mobi-mbri"></span>
                                            <div class="shape_1 shape"></div>
                                            <div class="shape_2 shape"></div>
                                            <div class="shape_3 shape"></div>
                                            <div class="shape_4 shape"></div>
                                        </div>
                                        <h4 class="card_title mbr-fonts-style display-7">
                                            <strong>Grow your Business</strong></h4>
                                        <p class="card_text mbr-fonts-style display-4">
                                            Thousands of Creators in the Facebook, YouTube and many more sectors are
                                            waiting for you.. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-md-7 col-sm-8 col-lg-6">
                        <div class="image-wrapper">
                            <img src="../assets/images/firm14.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: "Resources"
    })
</script>