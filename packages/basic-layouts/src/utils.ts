import { Routers } from "@uiw-admin/router-control"
/** 菜单转化 去除 dom  */
export function getMenu(data: Routers[] = []) {
  let treeList: Routers[] = []
  data.forEach((item) => {
    let obj = { ...item }
    if (item.routes) {
      const child = getMenu(obj.routes)
      obj.routes = child
    }
    if (item.path && item.path !== "*") {
      const { element, component, children, path, ...rest } = obj
      treeList.push({ ...rest, path, key: path })
    }
  })
  return treeList;
}

/** 把数组扁平化 用于 选项卡渲染 */
export const getRoutesList = (data: Routers[] = [], list: Routers[] = []) => {
  data.forEach((item) => {
    if (item.routes) {
      getRoutesList(item.routes, list)
    } else {
      list.push(item)
    }
  })
  return list;
}

/** 菜单 转换成 渲染面包屑导航  */
export class BreadcrumbMap {
  breadcrumb: Map<string, Routers[]> = new Map([])
  flat: Routers[] = [];
  constructor(routeData: Routers[]) {
    this.init(routeData)
  }
  private init(route: Routers[], parent?: Routers[]) {
    route.forEach((item) => {
      let par = (parent || []).concat([item])
      /** 始终把自己加载最后 */
      if (item.routes) {
        this.init(item.routes, par)
      }
      if (item.path && item.path !== "*") {
        this.breadcrumb.set(item.path, par)
      }
      this.flat.push(item)
    })
  }
}



