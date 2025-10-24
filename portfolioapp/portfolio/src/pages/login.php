<!-- A1.a Funcionalidad Login -->
<form method="POST">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="usuario" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
    <span class="color:red"><?php $errores[0] ? print($errores[0]): "" ?></span>
    <br>
  </div>
  <div class="form-group">Password
    <label for="exampleInputPassword1"></label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
    <span class="color:red"><?php $errores[1] ? print($errores[1]): "" ?></span>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>