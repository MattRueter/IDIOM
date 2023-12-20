import Link from "next/link";

export const Toolbar = () => {
    /*
	const state = useSelector((state) => state);
	const dispatch = useDispatch()
	const currentFolder = state.folderReducer.currentFolder;
	const makeSetFrom = state.setReducer.makeSetFrom;

	const chooseSets = () => {
		if(makeSetFrom.length >=1){
			const set = filterSets(makeSetFrom, currentFolder)
			dispatch(setSelected(set))
		}	
	}
	const selectedLabels = makeSetFrom.map((label,index) => {
		return (
			<li key={index}>{label}</li>
		)
	});

	const toggleTranslation = () => {
		dispatch(toggledLanguageChanged());
	}
	*/

	return (
		<div className={"toolbar"}>
			<h1>Current Folder</h1>

			{/*<h1>{currentFolder}</h1>*/}
			<div id={"label_list"}>Make a set from...
				<ul >
					<li>selected labels</li>
					{/*{selectedLabels}*/}
				</ul>				
			</div>
			<div className={"toolbarButtonContainer"}>
                <button className={"exerciseLinkBtn"} >EXERCISES</button>

				{/*<Link to='/exercises'  className={"exerciseLinkBtn"} onClick={() => { chooseSets(makeSetFrom) }}>Save set & go to exercises</Link>*/}
				<button>l1 or l2</button>
				{/*<button onClick={toggleTranslation}>L1/L2</button>*/}
			</div>
		</div>
	)
};