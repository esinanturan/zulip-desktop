import {html} from "../../../../common/html.ts";
import * as t from "../../../../common/translation-util.ts";

import {reloadApp} from "./base-section.ts";
import {initNewServerForm} from "./new-server-form.ts";

type ServersSectionProperties = {
  $root: Element;
};

export function initServersSection({$root}: ServersSectionProperties): void {
  $root.innerHTML = html`
    <div class="add-server-modal">
      <div class="modal-container">
        <div class="settings-pane" id="server-settings-pane">
          <div class="page-title">${t.__("Add a Zulip organization")}</div>
          <div id="new-server-container"></div>
        </div>
      </div>
    </div>
  `.html;
  const $newServerContainer = $root.querySelector("#new-server-container")!;

  initNewServerForm({
    $root: $newServerContainer,
    onChange: reloadApp,
  });
}
