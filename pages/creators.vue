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
                <section data-bs-version="5.1" class="team1 cid-uhtmHU52qq" id="team01-i">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-12">
                                <div class="card-wrapper">
                                    <h1 class="mbr-section-title mbr-fonts-style mb-3 display-5">Find a Creator today
                                    </h1>

                                    <p class="mbr-text mbr-fonts-style display-4">Thousands of Creators in the Facebook,
                                        YouTube
                                        and many more sectors are waiting for you.
                                        <br>
                                        <v-text-field append-inner-icon="fas fa-search" label="Search Keywords"
                                            color="purple" variant="outlined"
                                            style="width: 90%; left: 25px; top: 20px; position: relative;">
                                        </v-text-field>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-bs-version="5.1" class="team1 cid-uhtmoW4nHr" id="team1-h">
                    <v-toolbar title="3 Creators" color="transparent">
                        <div class="d-flex justify-center align-center h-100">
                            <v-btn color="primary" @click.stop="drawer = !drawer" size="x-large" style="margin: 10px;">
                                Filter
                            </v-btn>
                        </div>
                    </v-toolbar>
                    <v-row>
                        <v-col cols="6">
                            <iframe style="height:100%;width:100%;border:0;" frameborder="0"
                                src="https://www.google.com/maps/embed/v1/place?q=london&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </v-col>

                        <v-col cols="6">

                            <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);"></div>

                            <div class="container">
                                <v-row class="f-row">
                                    <v-col cols="4">
                                        <div class="f-wrap bg1">
                                            <div class="f-card">
                                                <img class="feature-image" src="../assets/images/mbr-546x365.jpg"
                                                    alt="">
                                                <div class="box b1">
                                                    <div class="box-row">
                                                        <div class="box-name">
                                                            <p class="mbr-text mbr-fonts-style display-7">John Deer</p>
                                                            <p class="mbr-text mbr-fonts-style display-7">
                                                                <em>Manager</em></p>
                                                        </div>
                                                    </div>
                                                    <div class="box-row">
                                                        <div class="box-contacts">
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="text-black box-link mbr-fonts-style">+1-900-123-4567</a>
                                                            </p>
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="text-black box-link mbr-fonts-style">info@yoursite.com</a><br>
                                                            </p>
                                                        </div>
                                                        <div class="box-social">
                                                            <a class="icon-transition" href="#">
                                                                <span class="mbr-iconfont socicon-behance socicon"
                                                                    style="color: rgb(227, 136, 136); fill: rgb(227, 136, 136);"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="f-wrap bg2">
                                            <div class="f-card">
                                                <img class="feature-image" src="../assets/images/mbr-546x819.jpg"
                                                    alt="">
                                                <div class="box b2">
                                                    <div class="box-row">
                                                        <div class="box-name">
                                                            <p class="mbr-text mbr-fonts-style display-7">Susan Wolf</p>
                                                            <p class="mbr-text mbr-fonts-style display-7">
                                                                <em>Recruiter</em></p>
                                                        </div>
                                                    </div>
                                                    <div class="box-row">
                                                        <div class="box-contacts">
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="text-black box-link mbr-fonts-style">+1-900-123-4567</a>
                                                            </p>
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="box-link mbr-fonts-style text-black">info@yoursite.com</a>
                                                            </p>
                                                        </div>
                                                        <div class="box-social">
                                                            <a class="icon-transition" href="#">
                                                                <span class="mbr-iconfont socicon-behance socicon"
                                                                    style="color: rgb(101, 198, 212); fill: rgb(101, 198, 212);"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="f-wrap bg3">
                                            <div class="f-card">
                                                <img class="feature-image" src="../assets/images/mbr-1-546x819.jpg"
                                                    alt="">
                                                <div class="box b3">
                                                    <div class="box-row">
                                                        <div class="box-name">
                                                            <p class="mbr-text mbr-fonts-style display-7">Bob marley</p>
                                                            <p class="mbr-text mbr-fonts-style display-7"><em>Agent</em>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="box-row">
                                                        <div class="box-contacts">
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="box-link mbr-fonts-style text-black">+1-900-123-4567</a>
                                                            </p>
                                                            <p class="mbr-contacts mbr-fonts-style display-7"><a href=""
                                                                    class="text-black box-link mbr-fonts-style">info@yoursite.com</a>
                                                            </p>
                                                        </div>
                                                        <div class="box-social">
                                                            <a class="icon-transition" href="#">
                                                                <span class="mbr-iconfont socicon-behance socicon"
                                                                    style="color: rgb(255, 232, 133); fill: rgb(255, 232, 133);"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
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
        title: ''
    })
</script>