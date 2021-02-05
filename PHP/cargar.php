<!DOCTYPE html>
<head>
<header>

    <link rel="stylesheet" href="style.css">
    
</header>

</head>
<body id="body">
<?php
include("nav.html");

?>
<h1 class="titulo">Cargar Archivos Desde PHP</h1>

<div class="container">		
			<div class="panel panel-primary">
				<div class="panel-body">
					
					<form name="form1" id="form1" method="post" action="guarda.php" enctype="multipart/form-data">
						
						<h4 class="text-center">Cargar Multiple Archivos</h4>
						
						<div class="form-group">
							<label class="col-sm-2 control-label">Archivos</label>
							<div class="col-sm-8">
								<input type="file" class="form-control" id="archivo[]" name="archivo[]" multiple="">
							</div>
							
							<button type="submit" class="btn btn-primary">Cargar</button>
						</div>
						
					</form>
					
				</div>
			</div>
		</div>



</body>







<?php
include("footer.html")
?>

</html>