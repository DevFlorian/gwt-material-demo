package gwt.material.design.demo.client.application.addins.dnd;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.addins.client.constants.Restriction;
import gwt.material.design.addins.client.ui.MaterialDnd;
import gwt.material.design.client.ui.MaterialPanel;

import javax.inject.Inject;


public class DndView extends ViewImpl implements DndPresenter.MyView {
    interface Binder extends UiBinder<Widget, DndView> {
    }

    @UiField
    MaterialPanel panel, woInertialPanel, endOnlyPanel, selfRestrict, restrictPanel;

    @Inject
    DndView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        MaterialDnd dnd = new MaterialDnd();
        dnd.setTarget(panel);

        MaterialDnd dndWoInertia = new MaterialDnd();
        dndWoInertia.setTarget(woInertialPanel);
        dndWoInertia.setInertia(false);

        MaterialDnd dndEndOnly = new MaterialDnd();
        dndEndOnly.setTarget(endOnlyPanel);
        Restriction restriction = new Restriction();
        restriction.setEndOnly(false);
        dndEndOnly.setRestriction(restriction);

        MaterialDnd dndSelfRestrict = new MaterialDnd();
        dndSelfRestrict.setTarget(selfRestrict);
        Restriction restriction1 = new Restriction();
        restriction1.setRestriction(Restriction.Restrict.SELF);
        dndSelfRestrict.setRestriction(restriction1);

        MaterialDnd dndRestrict = new MaterialDnd();
        dndRestrict.setTarget(restrictPanel);
        Restriction restriction2 = new Restriction();
        restriction2.setTop(0.25);
        restriction2.setLeft(0.25);
        restriction2.setRight(0.75);
        restriction2.setBottom(0.75);
        dndRestrict.setRestriction(restriction2);
    }

}
