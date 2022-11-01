###### Import AdminLTE ######
Step 1: install extension html to JSX
Step 2: Donwload template adminlte
Step 3: Go to public
    3.1: copy dist and plugin folder from adminlte
Step 4: edit index.html
    -> import link to css and javascript
    4.1 add it into header
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
        <!-- IonIcons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="dist/css/adminlte.min.css">
    4.2 add Jquery and javascript in bottom of body
        <!-- jQuery -->
        <script src="plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap -->
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- AdminLTE -->
        <script src="dist/js/adminlte.js"></script>
        <script src="plugins/chart.js/Chart.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="dist/js/demo.js"></script>
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="dist/js/pages/dashboard3.js"></script>
    4.3: add css class in body 
        <body class="hold-transition sidebar-mini">
    4.4: add wraper class insite root tag
          <div id="root">
            <div class="wrapper"></div>
        </div>
Step 5: create new js class such as header.js, menu.js, content.js and footer.js
    5.1: header.js copy file in index3.html and please focus and 
    copy it into file after than select html tag and right click to Convert HTML to JSX
        <nav className="main-header navbar navbar-expand navbar-white navbar-light"> ... </nav>
    
    5.2: menu.js  
        <aside className="main-sidebar sidebar-dark-primary elevation-4"> ... </nav>
    

##### security md5
https://www.npmjs.com/package/md5

# installation
npm i md5

# using
var md5 = require('md5');

console.log(md5('your'));


### Toast
npm install react-toastify
# using
toast.success("ແກ້ໄຂຂໍ້ມູນສຳເລັດ", {
    className: "laoFont",
    draggable: true,
    position: toast.POSITION.BOTTOM_RIGHT
})

toast.error("error", {
    className: "laoFont",
    draggable: true,
    position: toast.POSITION.BOTTOM_RIGHT
})

#### Modal
npm install react-bootstrap bootstrap

# Example
<div className="modal fade" id="modal-xl">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">ບັນທຶກຂໍ້ມູນລົດບັນທຸກ</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="form-row">
                                    <div className="col-md-3 mb-3">
                                        <label>ລະຫັດປະເພດລົດບັນທຸກ</label>
                                        <input type="text" value={truckTypeCode} className="form-control" placeholder="ລະຫັດປະເພດລົດບັນທຸກ" onChange={this.onTextChangeTrunkCode} />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label>ຊື່ປະເພດລົດບັນທຸກ</label>
                                        <input type="text" value={truckTypeName} className="form-control" placeholder="ຊື່ປະເພດລົດບັນທຸກ" onChange={this.onTextChangeTrunkType} />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label>ຢາງລົດ</label>
                                        <input type="number" value={tireLifeKm} className="form-control" placeholder="ຢາງລົດ" onChange={this.onTextChangeTireLifeKm} />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label>ຢາງລົດ</label>
                                        <input type="number" value={tireLifeDay} className="form-control" placeholder="ຢາງລົດ" onChange={this.onTextChangeTireLifeDay} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label>ຈຳນວນລໍ້</label>
                                        <input type="number" value={countWheels} className="form-control" placeholder="ຈຳນວນລໍ້" onChange={this.onTextChangeWheel} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">ປິດ</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.onClickAdd()}>ບັນທຶກ</button>
                            </div>
                        </div>
                    </div>
                </div>

    closeFormModal() {
        document.getElementById("modal-xl").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
    }