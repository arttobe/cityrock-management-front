// Common State
const defaults = {
  sidebar:
    {
      visible: true,
    },
  title: "[Cityrock]",
  layout: "DefaultLayout",
  snackbar:
    {
      visible: false,
      text: "",
      timeout: 6000,
      color: "",
    },
  isLoading: false,
  error:
    {
      code: null,
      level: null,
      message: "",
    },
  dialog:
    {
      visible: false,
      title: "dialog",
      component: null,
    },
};

export default
{
  namespaced: true,

  state: Object.assign({}, defaults),

  mutations:
        {
          updateSidebar(state, options) {
            state.sidebar = Object.assign({}, defaults.sidebar, options)
          },

          updateTitle(state, title) {
            state.title = title
          },

          updateLayout(state, layout) {
            state.layout = layout
          },

          updateDialog(state, options) {
            console.log(options);
            state.dialog = Object.assign({}, defaults.dialog, options)
          },

          updateSnackbar(state, options) {
            state.snackbar = Object.assign({}, defaults.snackbar, options)
          },

          error(state, options) {
            state.error = Object.assign({}, defaults.error, options)
          },

          clear(state) {
            state = Object.assign({}, defaults)
          },
          updateLoading(state, isLoading) {
            state.isLoading = isLoading
          },
        },

  actions:
        {
          clear(
            {
              state,
              commit,
              rootState,
              dispatch,
            },
          ) {
            commit("clear")
            dispatch("auth/clear", {},
              {
                root: true,
              })
          },

          updateSidebar({ commit }, options) {
            commit("updateSidebar", options)
          },

          updateTitle({ commit }, title) {
            commit("updateTitle", title)
          },

          updateLayout(
            {
              commit,
            }, layout,
          ) {
            commit("updateLayout", layout)
          },

          updateDialog(
            {
              commit,
            }, options,
          ) {
            commit("updateDialog", options)
          },

          updateSnackbar(
            {
              commit,
            }, options,
          ) {
            commit("updateSnackbar", options)
          },
          updateLoading(
            {
              commit,
            }, isLoading,
          ) {
            commit("updateLoading", isLoading)
          },
        },
}
