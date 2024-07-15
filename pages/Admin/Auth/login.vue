<template>
    <div>
        <section data-bs-version="5.1" class="header01 operationm5 cid-uisnHTXnez mbr-fullscreen" id="header01-1s">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="content-wrapper">

                            <div class="log-in">
                                <div class="div">
                                    <div class="overlap">
                                        <img class="star" src="../../../assets/images/Star 6.svg" />
                                        <div class="ellipse-3"></div>
                                        <div class="ellipse-4"></div>
                                        <div class="ellipse-5"></div>
                                        <img class="unsplash"
                                            src="../../../assets/images/emil-jarfelt-tDFqKW3xWso-unsplash.jpg" />
                                        <div class="rectangle-2"></div>
                                        <div class="frame-11">
                                            <h2 class="frame-11-h2">Welcome Back</h2>

                                            <v-btn><img style="height:28px;" src="../../../assets/images/Google.svg"
                                                    alt="">&nbsp;Sign in with Google</v-btn>

                                            <v-btn><img src="../../../assets/images/Facebook.svg" alt="">&nbsp;Sign in
                                                with Facebook</v-btn>

                                            <v-divider></v-divider>
                                            <h5>Or Continue with Email</h5>
                                            <form>
                                                <v-text-field prepend-icon="fas fa-user" v-model="name"
                                                    label="Username"></v-text-field>

                                                <v-text-field prepend-icon="fas fa-user" v-model="name" label="Email">
                                                </v-text-field>

                                                <v-checkbox v-model="checkbox" label="Save Password" type="checkbox"
                                                    value="1"></v-checkbox>

                                                <v-btn class="me-4" type="submit" color="purple" rounded size="x-large">
                                                    Sign In
                                                </v-btn>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="rectangle-4"></div>
                                    <div class="group-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="decor-wrapper">
                        <div class="decor-wrap decor_1"></div>
                        <div class="decor-wrap decor_2"></div>
                        <div class="decor-wrap decor_3"></div>
                        <div class="decor-wrap decor_4"></div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        data: () => ({
            form: false,
            email: null,
            password: null,
            loading: false,
        }),

        methods: {
            onSubmit() {
                if (!this.form) return

                this.loading = true

                setTimeout(() => (this.loading = false), 2000)
            },
            required(v) {
                return !!v || 'Field is required'
            },
        },
    }
</script>

<script setup>
    useHead({
        title: 'Welcome back to UGC Planet',
    });
</script>