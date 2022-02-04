<template>
    <div class="row">
        <div class="col-10">
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <button type="button" class="btn btn-link">
                            Бренд
                        </button>
                    </li>
                    <li class="breadcrumb-item">
                        <button type="button" class="btn btn-link">
                            Категория
                        </button>
                    </li>
                </ol>
            </nav>

            <p class="h2">
                Краткое название продукта
            </p>
            <p class="display-6">
                Более длинное название продукта, чуть длинее чем короткое
            </p>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary">
                Цена <span class="badge bg-danger">4</span>
            </button>
            <button
                type="button"
                class="btn btn-warning">
                В корзина
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="require('../assets/product-images/5f9200e98124c1.98253162.jpg')" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/product-images/5f9200e98124c1.98253162.jpg')" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/product-images/5f9200e98124c1.98253162.jpg')" class="d-block w-100">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-6">
            <p class="lead">
                This is a lead paragraph. It stands out from regular paragraphs. This is a lead paragraph. It stands out from regular paragraphs. This is a lead paragraph. It stands out from regular paragraphs. This is a lead paragraph. It stands out from regular paragraphs. This is a lead paragraph. It stands out from regular paragraphs. This is a lead paragraph. It stands out from regular paragraphs.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopProductInfo'
    }
</script>

<style scoped>

</style>