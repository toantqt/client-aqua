import { Redirect, Route, Switch } from "react-router-dom";
import adminSlug from "../resources/AdminSlug";
import BannerManager from "../screens/Admin/Banner Manager/screens/BannerManager";
import EditBanner from "../screens/Admin/Banner Manager/screens/EditBanner";
import CategoryManager from "../screens/Admin/Category Manager/screens/CategoryManger";
import EditCategory from "../screens/Admin/Category Manager/screens/EditCategory";
import LibraryManager from "../screens/Admin/Image Manager/screens/LibraryManager";
import CreateVideo from "../screens/Admin/Image Manager/screens/Video/CreateVideo";
import EditVideo from "../screens/Admin/Image Manager/screens/Video/EditVideo";
import NewsManager from "../screens/Admin/News Manager/screens/NewsManager";
import CreateNews from "../screens/Admin/Create News/screens/CreateNews";
import InforManager from "../screens/Admin/Infor Manager/screens/InforManager";
import ProductManager from "../screens/Admin/Product Manager/screens/ProductManager";
import EditProduct from "../screens/Admin/Product Manager/screens/EditProduct";
import CreateProduct from "../screens/Admin/Product Manager/screens/CreateProduct";
import EditNews from "../screens/Admin/Create News/screens/EditNews";
import AddBanner from "../screens/Admin/Banner Manager/screens/AddBanner";
import ContactManager from "../screens/Admin/Contact Manager/screens/ContactManager";
import AddContact from "../screens/Admin/Contact Manager/screens/AddContact";
import EditInfor from "../screens/Admin/Infor Manager/screens/EditInfor";
import CreateInfor from "../screens/Admin/Infor Manager/screens/CreateInfor";
import WarningManager from "../screens/Admin/Warning Manager/screens/WarningManager";
import QuestionManager from "../screens/Admin/Question Manager/screens/QuestionManager";
const AdminRoutes = (props) => {
  const handleLoading = props.handleLoading;
  return (
    <>
      <Switch>
        <Route
          exact
          path={adminSlug.bannerManager}
          render={() => <BannerManager {...props} />}
        ></Route>

        <Route
          exact
          path={adminSlug.addBanner}
          render={() => <AddBanner {...props} />}
        ></Route>
        <Route
          exact
          path={adminSlug.editBanner}
          render={(props) => (
            <EditBanner {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.categoryManager}
          render={() => <CategoryManager {...props} />}
        ></Route>

        <Route
          exact
          path={adminSlug.editCategory}
          render={(props) => (
            <EditCategory {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.libraryManager}
          render={(props) => (
            <LibraryManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.createVideo}
          render={() => <CreateVideo {...props} />}
        ></Route>

        <Route
          exact
          path={adminSlug.editVideo}
          render={(props) => (
            <EditVideo {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.newsManager}
          render={(props) => (
            <NewsManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.createNews}
          render={(props) => (
            <CreateNews {...props} handleLoading={handleLoading} />
          )}
        ></Route>
        <Route
          exact
          path={adminSlug.createInfor}
          render={(props) => (
            <CreateInfor {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.inforManager}
          render={(props) => (
            <InforManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>
        <Route
          exact
          path={adminSlug.editInfor}
          render={(props) => (
            <EditInfor {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.productManager}
          render={(props) => (
            <ProductManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.editProduct}
          render={(props) => (
            <EditProduct {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.createProduct}
          render={(props) => (
            <CreateProduct {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.editNews}
          render={(props) => (
            <EditNews {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.dealerManager}
          render={(props) => (
            <ContactManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.addContact}
          render={(props) => (
            <AddContact {...props} handleLoading={handleLoading} />
          )}
        ></Route>
         <Route
          exact
          path={adminSlug.questionManager}
          render={(props) => (
            <QuestionManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.warningManager}
          render={(props) => (
            <WarningManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>
      </Switch>
    </>
  );
};

export default AdminRoutes;
