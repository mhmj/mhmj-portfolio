<template>
    <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Portfolio</h2>
            </div>
            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200" v-show="this.isViewing == false">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-1.png" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>Resume & Portfolio</h4>
                            <p>Design And Display</p>
                            <div class="portfolio-links">
                                <a v-on:click="isView(1)"><i class="bx bx-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-2.png" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>Tracking System</h4>
                            <p>Scan & Invoice</p>
                            <div class="portfolio-links">
                                <a v-on:click="isView(2)"><i class="bx bx-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-3.png" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>Staff Portal</h4>
                            <p>Record & Monitor</p>
                            <div class="portfolio-links">
                                <a v-on:click="isView(3)"><i class="bx bx-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-show="isLoading">
                <div class="col-12"  style="display: flex; justify-content: center; align-items: center">
                    <intersecting-circles-spinner
                            :animation-duration="1200"
                            :size="70"
                            color="#0563bb"
                    />
                </div>
            </div>
            <div class="row" v-show="this.isViewing == true" style="height: 500px">
                <portfolio-1 v-if="isPortfolio1"></portfolio-1>
                <portfolio-2 v-if="isPortfolio2"></portfolio-2>
                <portfolio-3 v-if="isPortfolio3"></portfolio-3>
            </div>
        </div>
    </section>
</template>
<script>
    import { IntersectingCirclesSpinner } from 'epic-spinners'

    export default {
        components: {
            IntersectingCirclesSpinner
        },
        data() {
            return {
               isViewing: false,
               isLoading: false,
               isPortfolio1: false,
               isPortfolio2: false,
               isPortfolio3: false,
            }
        },
        methods: {
            isView (id){

                this.isViewing = !this.isViewing;
                this.isPortfolio1 =false;
                this.isPortfolio2 =false;
                this.isPortfolio3 =false;

                if(id == 1)
                {
                    this.isLoading = true;
                    var that = this;
                    setTimeout(function() { that.isLoading = false; }, 700);

                    var that = this;
                    setTimeout(function() { that.isPortfolio1 = true; }, 700);

                }
                if(id == 2)
                {
                    this.isLoading = true;
                    var that = this;
                    setTimeout(function() { that.isLoading = false; }, 700);

                    var that = this;
                    setTimeout(function() { that.isPortfolio2 = true; }, 700);
                }
                if(id == 3)
                {
                    this.isLoading = true;
                    var that = this;
                    setTimeout(function() { that.isLoading = false; }, 700);

                    var that = this;
                    setTimeout(function() { that.isPortfolio3 = true; }, 700);
                }
            },
        }
    }
</script>