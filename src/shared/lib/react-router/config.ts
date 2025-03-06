export const pathKeys = {
  root: "/",
  home() {
    return pathKeys.root;
  },
  about() {
    return pathKeys.root.concat("about/");
  },
  terms() {
    return pathKeys.root.concat("terms-of-use/");
  },
  policy() {
    return pathKeys.root.concat("privacy-policy/");
  },
  tv() {
    return pathKeys.root.concat("tv/");
  },
  login() {
    return pathKeys.root.concat("auth/");
  },
  program() {
    return pathKeys.root.concat("course/");
  },
  ranking() {
    return pathKeys.root.concat("ranking/");
  },

  tanda() {
    return pathKeys.root.concat("tanda/");
  },
  tandaTest() {
    return pathKeys.root.concat("tanda/test/");
  },
  tandaLogin() {
    return pathKeys.root.concat("tanda/login/");
  },
  tandaResult() {
    return pathKeys.root.concat("tanda/result/");
  },
  // group({ params }: { params: { slug: string } }) {
  //   return pathKeys.root.concat(`group/${params.slug}/`);
  // },
  course: {
    root() {
      return pathKeys.root.concat("courses/");
    },
    bySlug(slug: string) {
      return pathKeys.course.root().concat(`${slug}/`);
    },
  },
  profile: {
    root() {
      return pathKeys.root.concat("profile/");
    },
    badges() {
      return pathKeys.profile.root().concat("badges/");
    },
  },
};
