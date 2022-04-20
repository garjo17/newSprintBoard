Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
	//console.log("Vamos para Bingo");
	
	  var context = this.getContext();
      var modelNames = ['userstory', 'defect', 'defectsuite', 'testset'];
	  
      var tablero =    Ext.create( 'Rally.ui.gridboard.GridBoard', {          
                        context: context,
                        modelNames: modelNames,
                        toggleState: 'board',
                        stateful: false,
                        plugins: [ 
							{ ptype:'rallygridboardaddnew' },
							{
                                ptype: 'rallygridboardfieldpicker',
                                headerPosition: 'left',
                                modelNames: modelNames,
                                stateful: true,
                                stateId: context.getScopedStateId('columns-example')
                            },
                            {
                                ptype: 'rallygridboardinlinefiltercontrol',
                                inlineFilterButtonConfig: {
                                    stateful: true,
                                    stateId: context.getScopedStateId('filters'),
                                    modelNames: modelNames,
                                    inlineFilterPanelConfig: {
                                        quickFilterPanelConfig: {
                                            defaultFields: [
                                                'Iteration'
                                            ]
                                        }
                                    }
                                }
                            }
                        ],
                        cardBoardConfig: {
                            attribute: 'FlowState'
                        }
                    });
				
					this.add(tablero) ;
                }
            });
            
            
