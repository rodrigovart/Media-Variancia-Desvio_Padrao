<!doctype html>
<html lang="pt-BR">

<head>
    <title>Estatistica</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
</head>
<style>
    button {
        color: white !important;
    }

    i {
        cursor: grab;
    }

    i:active {
        cursor: grabbing;
    }
</style>

<body>
    <form class="row g-3 card md-6">
        <div class="card-header">
            <label for="numero">Numero</label>
        </div>
        <div class="card-body">
            <div class="col-auto mb-4">
                <input type="text" class="form-control" id="numero" value="">
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-secondary" onclick="add()">ADD <i class="bi bi-plus"></i></button>
                <button type="button" class="btn btn-danger" onclick="limpar()">LIMPAR <i
                        class="bi bi-trash-fill"></i></button>
            </div>
        </div>
    </form>

    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">X</th>
                <th scope="col">X - MEDIA</th>
                <th scope="col">QUADRADO</th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    <div class="card col-md-2 text-center mb-4">
        <div class="card-header">
            Calcular
        </div>
        <div class="card-body">
            <button type="button" class="btn btn-info" onclick="calcular()">Calcular <i
                    class="bi bi-calculator"></i></button>
        </div>
    </div>
    <div class="progress mb-4">
        <!-- visually-hidden -->
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style id="progress-bar"
            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="alert alert-dark" id="alert">

    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous">
    </script>
</body>
<script src="estatistica.js?v=<?=rand(0, 100000)?>"></script>

</html>