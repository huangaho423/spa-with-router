export const Login = {
    render: () => {
        return `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4 py-5">
                    <form>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fas fa-key"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                        </div>
                    </form>   
                </div> 
            </div>
        </div>
    `
    },
}
