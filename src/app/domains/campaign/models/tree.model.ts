export type ITreeChildren = {
  id: number,
  pid?: number,
  name: string,
  isLeaf: boolean,
}

export type ITreeModel = {
  id: number,
  pid?: number,
  name: string,
  dragDisabled: boolean,
  addTreeNodeDisabled: boolean,
  addLeafNodeDisabled: boolean,
  editNodeDisabled: boolean,
  delNodeDisabled: boolean,
  children: ITreeChildren[]
}
